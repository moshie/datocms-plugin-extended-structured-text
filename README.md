# Extended Structured Text

This is a DatoCMS plugin designed to extend the default structured text marks and block styles.

## Custom Marks

This plugin adds support for the following marks: `<small />`, `<sub />` & `<sup />`

[see customMarkRules on the StructuredText component exported from datocms-react](https://github.com/datocms/react-datocms/blob/master/docs/structured-text.md#basic-usage)

```tsx
export const spanRule = renderNodeRule(isSpan, ({ ancestors, node, key }) => {
  const marks = {
    strikethrough: (props) => <s {...props} />,
    superscript: (props) => <sup {...props} />,
    highlight: (props) => <mark {...props} />,
    strong: (props) => <strong {...props} />,
    subscript: (props) => <sub {...props} />,
    underline: (props) => <u {...props} />,
    emphasis: (props) => <em {...props} />,
    code: (props) => <code {...props} />,
    small: (props) => <small {...props} />,
  };

  node.marks?.forEach((mark) => (children = marks[mark]({ children })));

  return <span>{children}</span>;
});
```

## Custom Block Style

It also adds in a block style for blockquote which you can use to output blockquote's instead of paragraph tags:

Add this to your application's code See: https://github.com/datocms/react-datocms/blob/master/docs/structured-text.md#override-default-rendering-of-nodes

```tsx
export const paragraphRule = renderNodeRule(
  isParagraph,
  ({ ancestors, children, key, node }) =>
    node.style === 'blockquote' ? (
      <blockquote key={key} className="blockquote">
        {children}
      </blockquote>
    ) : (
      <p key={key}>{children}</p>
    )
);
```

## Alignment

We removed text alignment from this plugin as it makes much more sense being a block and we would encourage you to add text alignment as a custom block instead.
