import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../Actions/userStateActions';


function UserState() {
	const userState = useSelector(state => state.userState);
	const dispatch = useDispatch();
	

	return <button>{userState}</button>
}


export default UserState;
