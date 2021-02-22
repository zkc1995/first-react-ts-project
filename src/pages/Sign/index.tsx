import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Form, Input, Checkbox, Button} from 'antd';
import './index.css';
import { setTokenAction } from '../../store/actions';
import { signIn } from '../../services/user';

interface FormValue {
  remember: boolean,
  username: string,
  password: string
}

const Login: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignIn = async (target: FormValue) => {
    const { username, password } = target;

    const { token } = await signIn({username, password});

    localStorage.setItem('token', token);
    dispatch(setTokenAction(token));

    history.replace('/');
  };

  const handleFail = () => {
    return '2';
  };

  return (
    <Form
      className="sign-container"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleSignIn}
      onFinishFailed={handleFail}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item className="sign-btn">
        <Button type="primary" htmlType="submit">
          sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;