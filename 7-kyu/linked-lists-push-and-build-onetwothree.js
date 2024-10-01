"use strict";

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function push(head, data) {
    let newNode = new Node(data, head);

    return newNode;
}

function buildOneTwoThree() {
    let node = push(null, 3);
    node = push(node, 2);
    node = push(node, 1);

    return node;
}
