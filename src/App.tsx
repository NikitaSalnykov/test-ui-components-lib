import React from "react";
import {
  Button,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
} from "ui-component-library";
import "ui-component-library/dist/style.css";

const App: React.FC = () => {
  const RadioGender: React.FC = () => {
    const [val, setVal] = React.useState("female");
    return (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Your gender</p>
        <RadioGroup
          label="controlled"
          name="controlled"
          value={val}
          onChange={setVal}
        >
          <Radio value="female" label="Female" />
          <Radio value="male" label="Male" />
        </RadioGroup>
      </div>
    );
  };

  const CheckboxConfirm: React.FC = () => {
    const [a, setA] = React.useState(false);
    return (
      <div className="space-y-2">
        <Checkbox
          label="I give permission to use my personal information"
          checked={a}
          onChange={setA}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm">
          <div className="px-6 pt-6 pb-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign up</h1>
            <p className="mt-1 text-sm text-gray-500">Create your account</p>
          </div>

          {/* Form body */}
          <div className="px-6 pb-6">
            <div className="space-y-4">
              <Input label="Your name" placeholder="Type your name" />
              <Input
                type="email"
                label="Email"
                placeholder="name@example.com"
                helperText="We'll never share your email."
              />
              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                required
              />
              <Input
                type="password"
                label="Confirm password"
                placeholder="••••••••"
                required
              />
              <RadioGender />
              <CheckboxConfirm />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Button variant="primary" className="flex-1">
                Create account
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-500">
              Тестова сторінка для демонстрації підключення компонентів з
              бібліотеки{" "}
              <a
                className=" underline text-blue-600"
                href="https://github.com/NikitaSalnykov/ui-component-library"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
