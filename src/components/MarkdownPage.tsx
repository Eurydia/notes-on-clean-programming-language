import { ReactNode, FC, useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";

type HeaderProps = {
  id: string;
  children: ReactNode;
};

const HeaderA: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h1" {...props} />;
};

const HeaderB: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h2" {...props} />;
};

const HeaderC: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h3" {...props} />;
};

const HeaderD: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h4" {...props} />;
};

const HeaderE: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h5" {...props} />;
};

const HeaderF: FC<HeaderProps> = (props) => {
  return <Typography marginY={2} variant="h6" {...props} />;
};

type MarkdownPageProps = {
  contentPath: string;
};

export const MarkdownPage: FC<MarkdownPageProps> = (props) => {
  const { contentPath } = props;
  const [content, setContent] = useState<string>("Loading...");

  useEffect(() => {
    fetch(contentPath).then((response) => {
      if (response.ok) {
        response.text().then((responseText) => {
          setContent(responseText);
        });
        return;
      }
      setContent("Failed");
    });
  }, [contentPath]);

  return (
    <Container component="article" maxWidth="md">
      <Markdown
        options={{
          forceWrapper: true,
          wrapper: "main",
          overrides: {
            h1: { component: HeaderA },
            h2: { component: HeaderB },
            h3: { component: HeaderC },
            h4: { component: HeaderD },
            h5: { component: HeaderE },
            h6: { component: HeaderF },
          },
        }}
      >
        {content}
      </Markdown>
    </Container>
  );
};
