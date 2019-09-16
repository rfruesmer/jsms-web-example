import {JsmsService} from "jsms";

function dumpObject(object) {
    console.log(object);

    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(object);
    document.body.appendChild(element);
}


const messageService = new JsmsService();

messageService.receive("/some/queue")
    .then((message) => {
        dumpObject(message.body);
        // expected output: {request: "foo"}

        return {response: "ACK"};
    });

messageService.send("/some/queue", {request: "foo"})
    .then((response) => {
        dumpObject(response.body);
        // expected output: {response: "ACK"}
    });

