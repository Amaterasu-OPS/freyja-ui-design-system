import { Button, Drawer, Flex, Input, Overlay, Select,Text } from '@ui';
import { useState } from 'react';

function App() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <Overlay
        isVisible={isOverlayVisible}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        color='#1a1a1a'
        opacity={0.5}
        onDismiss={() => setOverlayVisible(false)}
        durationSeconds={.2}
      >
        <div style={{ padding: '20px', background: '#fff' }}>
          <Text as="h1" size='4xlarge'>Overlay Content</Text>
          <br />
          <Text as='paragraph' decoration='underline' type='italic' weight='extralight'>This is an overlay example.</Text>
          <br />
          <Text as='paragraph' size='xlarge' fontFamily='cursive' weight='extralight'>Content 2.</Text>
          <br />
          <Button onClick={() => setOverlayVisible(false)}>Close Overlay</Button>
        </div>
      </Overlay>
      <Drawer
        isOpen={isDrawerVisible}
        onDismiss={() => setDrawerVisible(false)}
        position='top'
      >
        <h1>Drawer Content</h1>
        <p>This is a drawer example.</p>
        <Button onClick={() => setDrawerVisible(false)}>Close Drawer</Button>
        <br />
        <Flex direction='row' gap='10px' alignItems='center'>
          <Select label='Select an option'
            options={[
              { label: 'Option 1 aldkaskldjaskl jalksd jalksjd laksjd kalsjd lasjdl akjsdl jaskdja lksdja', value: 'Option 1 aldkaskldjaskl jalksd jalksjd laksjd kalsjd lasjdl akjsdl jaskdja lksdja' },
              { label: '2', value: 'Option 2' },
              { label: '3', value: 'Option 3' },
            ]}
          />
          <Input label='Input Field' />
        </Flex>
      </Drawer>
      <Button onClick={() => setOverlayVisible(true)} isLoading={isOverlayVisible}>Open Overlay</Button>
      <Button onClick={() => setDrawerVisible(true)} isLoading={isDrawerVisible}>Open Drawer</Button>
      {
        new Array(100).fill(null).map((_, index) => (
          <br key={index} />
        ))
      }
    </>
  );
}

export default App;
