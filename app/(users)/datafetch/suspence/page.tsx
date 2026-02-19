import ServerComponent from "../servercomponent/page";
import Loading from "../loading";
import { Suspense } from "react";
const SuspensePage = async({searchParams}:{searchParams: {name: string}}) => {
    const {name} = await searchParams;
    console.log(name, "VIKASHJI");
   

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-screen overflow-y-auto">
            <div className="bg-white flex items-center justify-center text-black p-10 w-full h-full">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo delectus, neque error at nam natus recusandae deleniti harum architecto iusto asperiores libero veritatis itaque nisi quibusdam quam temporibus? Consequatur quidem, numquam deleniti quis similique accusantium ipsa modi quasi! Minus.</h2>
            </div>
            <div>
            <Suspense fallback={<Loading />}>
            <ServerComponent searchParams={{name: name}} />
            </Suspense>
            </div>
            <Suspense fallback={<MainLoading />}>
            <ChildComponent />
            </Suspense>
        </div>
    )
}
export default SuspensePage;

const MainLoading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-600">
            <h1>Loading...</h1>
        </div>
    )
}

const ChildComponent = async() => {
    await new Promise((res,rej) => {
        setTimeout(() => {
            res(true);
        }, 5000);
    })
    return (
        <div className="bg-yellow-500 gap-20 flex flex-col items-center justify-center text-white p-10 w-full h-full">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo delectus, neque error at nam natus recusandae deleniti harum architecto iusto asperiores libero veritatis itaque nisi quibusdam quam temporibus? Consequatur quidem, numquam deleniti quis similique accusantium ipsa modi quasi! Minus.</h2>
        </div>
    )
}