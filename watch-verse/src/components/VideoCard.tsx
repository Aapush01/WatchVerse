
export function VideoCrad(props: any) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.thumbnailImg} alt="thumbnail img" />
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1">
                <img className="rounded-full w-15 h-15 pl-1" src={props.AuthorImg} alt="author img" />
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
            <div className="col-span-11 text-customGray">
                 {props.author}
            </div>
            <div className="col-span-11 text-customGray ">
                  {props.views} views |  {props.timestamp}
            </div>
            </div>
        </div>
    </div>
}