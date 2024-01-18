import { useRouter } from "next/router";
import React from "react";

function ImageInfo() {
  const router = useRouter;
  const { blog_slug, image_id } = router.query;
  return (
    <div>
      <h2>this is the {image_id} image of {blog_slug}</h2>
    </div>
  );
}

export default ImageInfo;
