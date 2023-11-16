// Импортируем стили
import './MyInput.css'


const MyInput = (props: any) => {
	return (
		<input {...props} className='my-input'/>
	)
}

export default MyInput;