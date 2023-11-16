import './MyButton.css';


const  MyButton = (props: any) => {
	return (
		<button {...props} className='my-btn'>
			{props.title}
		</button>
	)
}

export default MyButton;