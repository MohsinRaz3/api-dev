import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Wrapper from "@/app/Wrapper/page";
async function getData() {
    try {
        const res = await fetch(`https://cdn.contentful.com/spaces/oq08i2ngazpk/environments/master/entries?access_token=wqJBimzTAuSwdriUIK1X-MlvS7WxgK3Dadm4iqYvJhY&content_type=article`, { cache: "no-cache" })

        if (!res.ok) {
            throw new Error("Failed to retrive")
        }
        return res.json();
    } catch (error: any) {
        return error.message

    }
}

const page = async () => {
    const blogs = await getData();
    console.log(blogs);

    return <>
        <Wrapper>
            <ul>
                {blogs.items?.map((item: any) => (
                    <li key={item.sys.id}>
                        <h1 className="font-bold text-2xl mt-3"> {item.fields.title}</h1>
                        {documentToReactComponents(item.fields.articlebody)}

                    </li>
                ))}
            </ul>
        </Wrapper>
    </>
};

export default page;
