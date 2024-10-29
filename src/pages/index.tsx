
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/providerSlice';
import { RootState } from '../store/createStore';

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.provider.value);

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;

