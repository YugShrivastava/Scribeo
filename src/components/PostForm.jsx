import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import storageService from "../appwrite/config";
import { Button, Input, RTE, Select } from "./";

function PostForm({ post }) {
  const [error, setError] = useState(null);
  const { register, handleSubmit, setValue, getValues, watch, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "Write your post's content here...",
        slug: post?.$id || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const  session  = useSelector((state) => state.auth.session);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await storageService.uploadFile(data.image[0])
        : null;
      if (file) storageService.deleteFile(post.image);

      const posted = await storageService.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : post.image,
      });

      if (posted) {
        navigate(`/post/${posted.$id}`);
      } else {
        setError(error);
      }
    } else {
      const file = await storageService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.image = fileId;

        const posted = await storageService.createPost({
          ...data,
          userId: session.$id,
        });
        if (posted) navigate(`/post/${posted.$id}`);
        else setError(error);
      } else setError(error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title" && value.title.length <= 36) {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="w-full md:px-20 px-5 sm:px-10 py-6">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full grid grid-cols-2 border card-bg px-4 sm:px-10 rounded-sm py-4 sm:py-6 gap-10 justify-center items-center"
      >
        {/* <div className="flex gap-14 text-primary flex-wrap"> */}
        <div className="flex gap-5 flex-col text-primary col-span-2 sm:col-span-1">
          <Input
            label="Title: "
            placeholder="Title of the post"
            type="text"
            {...register("title", {
              required: true,
            })}
            className=""
          />
          <Input
            label="Slug: "
            placeholder="URL of the post"
            type="text"
            {...register("slug", {
              required: true,
            })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
            className=""
          />
        </div>
        <div className="flex gap-5 flex-col text-primary sm:col-span-1 col-span-2 w-full sm:w-auto">
          <Input
            label="Header Image: "
            type="file"
            {...register("image", { required: !post })}
            accept="image/png, image/jpg, image/jpeg, image/gif"
            className="w-full"
          />
          <Select
            label="Status"
            className="w-full"
            options={["active", "inactive"]}
            {...register("status", {required: true})}
          />
        </div>
        {/* </div> */}
        <div className="w-full text-primary col-span-2">
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        {error ? <div className="text-primary text-xl text-red-400 dark:text-red-500">{error}</div> : null}
        <div className="w-full">
          <Button text="Upload" type="submit" className="w-full" />
        </div>
        <Link to={"/"}>
          <Button
            text="Discard"
            bgColor=""
            hoverBgColor=""
            type="button"
            className=" bg-red-400 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400 w-full"
          />
        </Link>
      </form>
    </div>
  );
}

export default PostForm;
