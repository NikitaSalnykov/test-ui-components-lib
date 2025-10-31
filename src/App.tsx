import React from "react";
import {
  Avatar,
  Button,
  CheckboxField,
  Form,
  InputField,
  RadioGroupField,
  SelectField,
  useForm,
  useToast
} from "ui-component-library";

type ProfileForm = {
  fullName: string;
  email: string;
  gender: string;
  agree: boolean;
  role: string;
};

const initial: ProfileForm = {
  fullName: "",
  email: "",
  gender: "male",
  agree: false,
  role: "student"
};

const rules = {
  fullName: { required: true, minLen: 2 },
  email: { required: true, email: true },
  agree: { required: "Підтвердіть згоду" },
};

const roleOptions = [
  { label: "Вчусь", value: "student" },
  { label: "Працюю", value: "worker" },
  { label: "Керівник компанії", value: "ceo" },
];

const App: React.FC = () => {
  const form = useForm<ProfileForm>(initial, rules);
  const { success } = useToast();

  const submit = (vals: ProfileForm) => {
    console.log("submit:", vals);
    success(`${form.values.fullName}! Account created!`);
    form.reset(initial);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-slate-200">
        <div className="px-6 pt-6 pb-4 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
            Реєстрація
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Створіть свій обліковий запис
          </p>
        </div>

        <div className="px-6 pb-6">
          <Form
            form={form}
            onSubmit={submit}
            className="space-y-4"
          >
            <InputField
              form={form}
              name="fullName"
              label="Повне імʼя"
              placeholder="Іван Петренко"
            />
            <InputField
              form={form}
              name="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
            />

            <RadioGroupField
              form={form}
              name="gender"
              label="Стать"
              options={[
                { label: "Чоловік", value: "male" },
                { label: "Жінка", value: "woman" },
              ]}
            />

            <SelectField
              form={form}
              name="role"
              label="Роль"
              options={roleOptions}
              placeholder="Оберіть роль"
            />

            <CheckboxField
              form={form}
              name="agree"
              label="Погоджуюсь з умовами"
            />

            <div className="pt-4 flex gap-3 justify-center">
              <Button type="submit" variant="primary" className="flex-1">
                Надіслати
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset(initial)}
              >
                Скинути
              </Button>
            </div>
          </Form>
          <div className="w-full h-[1px] bg-slate-400 my-4"></div>
     <div className="flex items-center justify-center ">
     <p className="text-center text-xs text-gray-500">
              Тестова сторінка для демонстрації підключення компонентів з
              бібліотеки{" "}
              <a
                className=" underline text-blue-600"
                href="https://github.com/NikitaSalnykov/ui-component-library"
              >
                github
              </a>
            </p>
            <Avatar
            src="https://avatars.githubusercontent.com/u/121830017?v=4"
            size="sm"
            alt="User A"
          />
     </div>
        </div>
      </div>
    </div>
  );
};

export default App;
