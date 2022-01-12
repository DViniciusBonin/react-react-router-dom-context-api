import { Component, ReactNode } from "react";

interface Props {

}

export default class User extends Component {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render(): ReactNode {
        return (
            <div>
                React com classe
            </div>
        )
    }
}