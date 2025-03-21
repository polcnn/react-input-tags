import type { ReactNode, CSSProperties } from "react";
import _ from "lodash";
import Flex from "./Flex";
import { CloseIcon } from "./Icon";

interface IProps {
  children: ReactNode;
  onRemove?: () => void;
  style?: CSSProperties;
}

const Badge = ({ children, onRemove, style = {} }: IProps) => {
  return (
    <div className="badge" style={{ ...style }}>
      {_.isFunction(onRemove) ? (
        <Flex gap={8}>
          {children}

          <button
            className="badge-remove"
            style={{ ...style }}
            onClick={onRemove}
          >
            <CloseIcon size={12} />
          </button>
        </Flex>
      ) : (
        children
      )}
    </div>
  );
};

export default Badge;
