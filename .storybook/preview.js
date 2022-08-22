import { addDecorator } from "@storybook/react";
import '../src/styles/basic-theme.scss'
// For each story, the parent element will be div with class name "platform"
addDecorator(story => <div className="ari-theme-basic">{story()}</div>);