import type { RenderConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas, ContextInspector } from 'datocms-react-ui';
import s from './styles.module.css';

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      <p>Extended Structured Text Formats.</p>
      <div className={s.inspector}>
        <ContextInspector />
      </div>
    </Canvas>
  );
}