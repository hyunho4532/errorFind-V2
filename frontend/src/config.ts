import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);


export const MenuItems = [
    {
        key: 1,
        title: "자바스크립트",
        icon: "✌️",
        link: "/question/javascript"
    },
    {
        key: 2,
        title: "타입스크립트",
        icon: "🤩",
        link: "/question/typescript"
    },
    {
        key: 3,
        title: "React",
        icon: "😊",
        link: "/question/react"
    },
    {
        key: 4,
        title: "Next",
        icon: "😍",
        link: "/question/next"
    },
    {
        key: 5,
        title: "Spring",
        icon: "👌",
        link: "/question/spring"
    }
]