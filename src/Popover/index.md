---
nav:
  title: Components
  path: /components
group:
  title: 数据
  path: /data
---

### Popover 气泡

Demo:

```tsx
import React, { useState, useRef } from 'react';
import { Popover, Button, ClickOutside } from 'volute-ui';

export default function(props: any) {
  const onClick = () => {
    setOpen(!open);
  };
  const onClickOut = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const div = useRef<HTMLDivElement>(null);
  return (
    <div className="demo PopoverExample">
      <h2>点击弹出内容</h2>
      <div className="demo-row">
        <Popover content="弹出内容">
          <Button>向上弹出</Button>
        </Popover>
      </div>
      <div className="demo-row">
        <Popover content="弹出内容" position="right">
          <Button>向右弹出</Button>
        </Popover>
      </div>
      <div className="demo-row">
        <Popover content="弹出内容" position="topLeft">
          <Button>向左上弹出</Button>
        </Popover>
      </div>
      <div className="demo-row">
        <Popover content="弹出内容" position="bottomRight">
          <Button>向右下弹出</Button>
        </Popover>
      </div>
      <h2>移入按钮弹出内容</h2>
      <div className="demo-row">
        <Popover content="弹出内容" trigger="hover">
          <Button>向上弹出</Button>
        </Popover>
      </div>
      <h2>设置 container</h2>
      <div ref={div} className="demo-row" style={{ position: 'relative' }}>
        <Popover content="弹出内容" container={div}>
          <Button>点击弹出</Button>
        </Popover>
      </div>
      <h2>手动触发</h2>
      <div className="demo-row">
        <ClickOutside handler={onClickOut}>
          <Popover content="弹出内容" trigger="manual" open={open}>
            <Button onClick={onClick}>onClick</Button>
          </Popover>
        </ClickOutside>
      </div>
    </div>
  );
}
```
