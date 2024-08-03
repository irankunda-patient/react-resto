import meat from '../assets/meat.jpeg'
import food from '../assets/roastingmeat.jpg'
import heroPot from '../assets/heropotatoes.jpg'
import meatSalads from '../assets/meat&salads.jpg'
import potato from '../assets/images.jpeg'



export const menuList = [

    {
        img:meat,
        text: "stick Meat",
        parentStyles: "bg-white flex justify-center flex-1 flex-col items-center py-3 rounded-md",
        childStyles: "w-[200px] h-[200px] rounded-full  shadow flex justify-center items-start overflow-hidden",
    },
    {
        img: heroPot,
        text: "Fried Potatoes",
        parentStyles: "bg-white flex justify-center flex-1 flex-col items-center py-3 rounded-md",
        childStyles: "w-[200px] h-[200px]  overflow-hidden shadow flex justify-center items-start",
    },
    {
        img: meatSalads,
        text: "Meat & Salads",
        parentStyles: "bg-white flex justify-center flex-1 flex-col items-center py-3 rounded-md",
        childStyles: "w-[200px] h-[200px] rounded-full overflow-hidden shadow flex justify-center items-start",
    },
    {
        img: potato,
        text: "Chips",
        parentStyles: "bg-white flex justify-center flex-1 flex-col items-center py-3 rounded-md",
        childStyles: "w-[200px] h-[200px] rounded-full overflow-hidden shadow flex justify-center items-start",
    },
    {
        img: food,
        text: "Food",
        parentStyles: "bg-white flex justify-center flex-1 flex-col items-center py-3 rounded-md",
        childStyles: "w-[200px] h-[200px] rounded-full overflow-hidden shadow flex justify-center items-start",
    }
]