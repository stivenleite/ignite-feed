export function Avatar({hasBorder = true, src}){
    return(
        <img 
            src={src} 
            alt="Profile picture"
            className={hasBorder ? "size-14 rounded-lg border-4 border-gray2 outline outline-2 outline-green-light" : "size-12 rounded-lg"}
        />
    )
}