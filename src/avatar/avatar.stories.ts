import { html, TemplateResult } from 'lit';
import './index.js';

export default {
  title: 'Avatar',
  component: 'tap-avatar',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

export const Avatar: Story<ArgTypes> = () => html` <tap-avatar> </tap-avatar> `;

Avatar.args = {};
