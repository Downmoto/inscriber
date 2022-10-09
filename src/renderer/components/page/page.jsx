import React, { useEffect, useRef } from "react";
import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import "../../styles/page.scss";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

// component
export default function Page() {
  const initialEditorState = loadContent();
  const editorStateRef = useRef();

  const initialConfig = {
    namespace: "MyEditor",
    editorState: initialEditorState,
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="page">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
        />
        <OnChangePlugin
          onChange={(editorState) => {
            onChange(editorState);
            editorStateRef.current = editorState;
          }}
        />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
}

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error) {
  console.error(error);
}

function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

function loadContent() {
  return '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Prologue","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"I was looking at my phone and trying to message my friend to know if he was already inside while waiting in line to enter the convention. I had been to one convention before but this was the first time I was actually doing cosplay so I was very excited.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Truth be told me and my friend had wanted to come as the main character from overlord, I wearing momon’s armor and my friend in his skeleton robes but, as it was my first time, the armor had turned out so shitty I was too ashamed to wear it and my friend had similar trouble so we went with our second option, the fast option.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Cosplaying as Uchiha Shisui was incredibly easy, dark blue clothes a forehead protector some contact lens, sandals, a leather chest protector and a foam sword at my back and I was done, less than 3 days to get it all and extremely convenient since we were out of time, my friend’s costume as Itachi was even easier with the large coat in place of the clothes, the bastard I bet it was cheaper than mine too.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Suddenly I noticed a loud noise coming from above so I looked up and stared directly at a burning piece of debris as it smashed right through my upper body pulverizing my head and chest, sending what remained of my body flying and on fire while leaving a two meters wide hole in the ground and pelting the bystanders with pieces of bone and asphalt.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Floating there above what little remained of my body, a hand, most of a forearm and two legs, I continued to stare stuned “Well… that just happened.” I couldn’t help but say, at least it had been so fast I didn’t even have time to feel pain.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"I was floating in the air a little above the crater, my body now transparent and without any strength, stuned I tried to touch one of the pieces of my body only to pass right through it, shit I was a ghost wasn’t I?","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';
}

addEventListener('keypress', (e) => {
  if (e.key == 'enter') {
    window.scrollBy(100, 0)
  }
})