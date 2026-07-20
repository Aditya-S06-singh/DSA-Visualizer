//css not needed
//App.css already done it
import Editor from "@monaco-editor/react";

function CodeEditor() {

  // Default code shown when the website first loads.
  // This helps users immediately understand what the
  // visualizer expects.

  const defaultCode = `class Main {

    public static void main(String[] args) {

        Node head = new Node(10);

    }

}`;

  return (

    <div className="panel">

      <h2>Java Code</h2>

      <Editor

        height="100%"

        defaultLanguage="java"

        theme="vs-dark"

        defaultValue={defaultCode}

        options={{

          fontSize:16,

          minimap:{
            enabled:false
          },

          automaticLayout:true,

          scrollBeyondLastLine:false,

          wordWrap:"on",

          tabSize:4

        }}

      />

    </div>

  );

}

export default CodeEditor;