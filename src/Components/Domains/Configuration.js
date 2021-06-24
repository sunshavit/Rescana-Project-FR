import React, { useReducer } from "react";
import * as Styled from "./Configuration.style";

function Configuration() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state.map((item, index) =>
          index === action.payload
            ? { ...item, priority: item.priority + 1 }
            : item
        );
      case "decrement":
        return state.map((item, index) =>
          index === action.payload
            ? {
                ...item,
                priority: item.priority > 1 ? item.priority - 1 : 1,
              }
            : item
        );
      case "set_domain":
        return state.map((item, index) =>
          index === action.payload.index
            ? { ...item, domain: action.payload.domain }
            : item
        );
      case "add_domain":
        return [...state, action.payload.item];
      default:
        return state;
    }
  };

  const [configs, dispatch] = useReducer(reducer, [
    { domain: "dsfsdsa@gmail.com", priority: 1 },
  ]);

  const renderItems = () => {
    return configs.map(({ domain, priority }, index) => (
      <Styled.DomainRow key={index}>
        <Styled.DomainItem>{domain}</Styled.DomainItem>
        <Styled.PriorityItem>
          <Styled.AddButton
            onClick={() => dispatch({ type: "increment", payload: index })}
          />
          {priority}
          <Styled.RemoveButton
            disabled={priority === 1}
            onClick={() => dispatch({ type: "decrement", payload: index })}
          />
        </Styled.PriorityItem>
      </Styled.DomainRow>
    ));
  };

  return <Styled.DomainsContainer>{renderItems()}</Styled.DomainsContainer>;
}

export default Configuration;
