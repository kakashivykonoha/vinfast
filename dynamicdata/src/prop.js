
/* 

là công cụ thiết yếu để cấu hình tùy chỉnh 
mọi thứ đều có thể chạy qua component single value, object, array
nó sẽ trả lời câu hỏi làm sao để child ra phần tử nhỏ
*/
export default function Student(props){
    return(
        <div>
            <p>Name:{props.name}</p>

        </div>
    )
}