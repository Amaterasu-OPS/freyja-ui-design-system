<samp><h6 align="center">#ui, #project, #design-system</h6></samp>
# <samp align="center"><h2 align="center">Freyja UI DS</h2></samp>

<p align="center">
  <img src="https://img.shields.io/badge/vite-22272E?&style=for-the-badge&logo=vite&logoColor=646CFF">
  <img src="https://img.shields.io/badge/react-22272E?style=for-the-badge&logo=react&logoColor=2496ED">
  <img src="https://img.shields.io/badge/emoticon-22272E?style=for-the-badge&logo=styledcomponents&logoColor=DB7093">
</p>
<br/>

Freyja is Amaterasu’s official design system, created to unify visual identity and interface standards across all products.
It provides Guidelines, and a component library for React and Vue, ensuring consistency, accessibility, and high performance.
With solid foundations and reusable components, Freyja accelerates development while maintaining a cohesive user experience.

## Example

```ts
'use client';

import { Button, Input, Flex} from 'amaterasu-freyja-ui-design-system';
import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <Flex direction='column' gap="1rem" justifyContent='center' style={{ width: '30rem' }}>
      <Text as='h1' size='2xlarge'>Sign In</Text>
      <Input id="email-input" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input id="password-input" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <Button onClick={auth}>Sign In</Button>
      </div>
    </Flex>
  );
}
```

## Storybook

You can explore all Freyja components directly in our Storybook.
It provides interactive examples, documentation, usage guidelines, and customization options, allowing you to understand each component’s behavior and integrate them into your project with ease.

```bash
npm run storybook
```

Open [Localhost:6006](http://Localhost:6006)

## Contribute

Want to be part of this project?

Whether it’s improving documentation, fixing bugs, or adding new features — your help is always welcome.

Just fork the repo, make your changes, and open a pull request. Let’s build something great together!

## License
MIT License. See `LICENSE` file for details.
