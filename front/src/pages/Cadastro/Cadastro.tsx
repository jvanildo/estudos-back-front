import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';

type FieldType = {
  name?: string;
  endereco?: string;
  cep?: string;
  numero?: number;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Cadastro: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Nome da loja"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Endereco"
      name="endereco"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Cep"
      name="cep"
      rules={[{ required: true, message: 'Cep obrigatorio!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Numero"
      name="numero"
      rules={[{ required: true, message: 'Numero obrigatorio!' }]}
    >
      <InputNumber/>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Cadastrar Loja
      </Button>
    </Form.Item>
  </Form>
);

export default Cadastro;