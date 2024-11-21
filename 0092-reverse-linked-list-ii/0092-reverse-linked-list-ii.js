/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head;
    let prev = null;
    let index = 1;
    while(index<left){
        prev = curr;
        curr = curr.next;
        index++;
    }
    let prev2 = curr;
    let tail = curr;
    curr = curr.next;
    while(index<right){
        const temp = curr.next;
        curr.next = prev2;
        prev2 = curr;
        curr = temp;
        index++;
    }
    if(prev)prev.next = prev2;
    tail.next = curr;
    return left===1?prev2:head;
};