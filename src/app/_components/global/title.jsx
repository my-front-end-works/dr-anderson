export default function Title({text = '', color = 'black'}){
    return <main className={`text-5xl ${color != 'black'? 'text-white': 'text-black'}`}>{text}</main>;
}