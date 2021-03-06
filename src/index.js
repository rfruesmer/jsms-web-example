import {JsmsService} from "jsms";

function print(object) {
    console.log(object);

    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(object);
    document.body.appendChild(element);
}


const messageService = new JsmsService();

messageService.receive("/some/queue")
    .then((message) => {
        print(message.body); // expected output: {request: "foo"}
        return {response: "ACK"};
    });

messageService.send("/some/queue", {request: "foo"})
    .then((response) => {
        print(response.body); // expected output: {response: "ACK"}
    });

messageService.subscribe("/some/topic", message => {
    print(message.body); // expected output: {zyx: "cab"}
});

messageService.publish("/some/topic", {zyx: "cab"});
