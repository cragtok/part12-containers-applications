import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders content", () => {
    const todo = {
        text: "Todo text",
        done: false,
    };

    render(
        <Todo todo={todo} onClickDelete={() => { }} onClickComplete={() => { }} />
    );

    const element = screen.getByText("Todo text");
    expect(element).toBeDefined();
});
