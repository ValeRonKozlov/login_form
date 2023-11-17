import './MyButton.css';


const  MyButton = ({disabled, ...props}:any) => {
// Состояние кнопки активна или нет
	const isDisabled = disabled;

	return (
		<button {...props} className={isDisabled ? 'my-btn disabled' : 'my-btn'}>
			{props.title}
		</button>
	)
}

export default MyButton;