import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import Image from "next/image";


const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "NutriPlan has revolutionized my meal planning and nutrition journey. With its intuitive Notion template, I can effortlessly plan my meals, track my nutrition, and stay on top of my health goals. It's truly a game-changer!"
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I've tried various meal planning tools, but NutriPlan stands out from the rest. The customizable layouts and seamless recipe integration make it a breeze to create delicious and healthy meals. It's become an essential part of my wellness routine."
    },
    {
        id: uuid(),
        title: "Miguel J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "NutriPlan has made meal planning and tracking nutrition so much easier and enjoyable. The comprehensive features and user-friendly interface have helped me stay on track with my health goals. I highly recommend it to anyone looking for a convenient and effective solution."
    },
    {
        id: uuid(),
        title: "Kim L.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I can't imagine my nutrition journey without NutriPlan. It has simplified the way I plan my meals and track my progress. The ability to customize layouts and easily integrate recipes has made healthy eating a breeze. It's been a true lifesaver!"
    }
];

export const Columns = ({ places }) => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10">
            {places.result.reviews.sort((a, b) => b.rating - a.rating).map((item, i) => (
                <div
                    key={i}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <a href={item.author_url}>
                        <Image
                            src={item.profile_photo_url}
                            width={100}
                            height={100}
                            alt={item.author_name}
                            objectFit="cover"
                            loading="lazy"
                            className={`w-auto h-8`}
                        />
                        <h3 className="text-xl m-0 font-medium text-black">
                            {item.author_name}
                        </h3>
                    </a>
                    <div className="flex m-0">
                        {Array.from({ length: item.rating }).map((_, i) => (
                            <Icon
                                key={i}
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                        ))}
                    </div>
                    <p>{item.text.slice(0, 125).trim()}{item.text.length > 125 && "..."}</p>
                </div>
            ))}
        </SectionContainer>
    );
};
