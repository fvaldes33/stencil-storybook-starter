import { storiesOf } from '@storybook/html';

storiesOf('Component', module)
    .add('with text', () => {
        return '<my-component first="Stencil" last="Don\'t call me a framework\' JS"></my-component>';
    })