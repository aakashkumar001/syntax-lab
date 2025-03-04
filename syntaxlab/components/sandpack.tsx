import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const sandpack = () => {
  return (
    <div>
      <div className="w-[64vw]">
        <Sandpack
          theme={sandpackDark}
          template="react"
          options={{
            showNavigator: true,
          }}
        />
      </div>
    </div>
  );
};

export default sandpack;
