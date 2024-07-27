package com.company;

import java.util.Arrays;

public class Main {
    static class Node {
        private final int val;
        private Node next;
        private Node left;
        private Node right;

        public Node(int val) {
            this.val = val;
        }

        public void setNext(Node node) {
            this.next = node;
        }

        public Node getNext() {
            return next;
        }
    }

    public static void main(String[] args) {
	    recursion(1);
        System.out.println("Reverse:" + reverseString("Hello_World"));

        String palindromeWord = "civic";
        String notPalindrome = "Civic";
        System.out.println(isPalindrome(palindromeWord));
        System.out.println(isPalindrome(notPalindrome));

        System.out.println("Binary:" + findBinary(233, "100"));
        System.out.println("Summation:" + recursiveSummation(5));
        System.out.println(("Binary Search:" + binarySearch(new int[]{1, 2, 3}, 0, 2, 1)));
        System.out.println("Fibonacci:" + fibonacci(5));

        int[] data = new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1,0, -1, -2, -3, -4, -5, -6, -7, -8, -9};
        System.out.println("mergeSort:" + Arrays.toString((mergeSort(data, 0, data.length- 1))));

        Node n1 = new Node(1);
        Node n2 = new Node(5);
        Node n3 = new Node(13);
        Node n4 = new Node(14);
        Node n5 = new Node(550);

        Node n11 = new Node(2);
        Node n22 = new Node(15);
        Node n33 = new Node(130);
        Node n44 = new Node(200);
        Node n55 = new Node(350);

        n1.setNext(n2);
        n2.setNext(n3);
        n3.setNext(n4);
        n4.setNext(n5);

        Node sortedMerge = mergeLists(n1, n11);
        printLinkedList(sortedMerge);

        printLinkedList(n1);
        Node reversed = reverseList(n1);
        System.out.println();
        printLinkedList(reversed);
    }

    private static Node insertNode(Node root, int val) {
        if (root == null) {
            return new Node(val);
        } else if (val > root.val) {
            root.right = insertNode(root.right, val);
        } else {
            root.left = insertNode(root.left, val);
        }
        return root;
    }

    private static Node mergeLists(Node a, Node b) {
        if (a == null) {
            return b;
        } else if (b == null) {
            return a;
        } else if (a.val <= b.val) {
            a.next = mergeLists(a.next, b);
            return a;
        } else {
            b.next = mergeLists(a, b.next);
            return b;
        }
    }

    private static void printLinkedList(Node node) {
        System.out.println("***printLinkedList***");
        Node tmp = node;
        while(tmp != null) {
            System.out.println(tmp.val + " ");
            tmp = tmp.getNext();
        }
    }

    private static Node reverseList(Node node) {
        if (node == null || node.next == null) {
            return node;
        }
        Node p = reverseList(node.next);
        node.next.next = node;
        node.next = null;
        return p;
    }

    private static int[] mergeSort(int[] data, int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;
            mergeSort(data, start, mid);
            mergeSort(data, mid + 1, end);
            merge(data, start, mid, end);
        }
        return data;
    }

    private static void merge(int[] data, int start, int mid, int end) {
        int[] temp = new int[end - start + 1];
        int i = start;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= end) {
            if (data[i] <= data[j]) {
                temp[k++] = data[i++];
            }
            else {
                temp[k++] = data[j++];
            }
        }

        while (i <= mid) {
            temp[k] = data[i];
            k++; i++;
        }

        while (j <= end) {
            temp[k] = data[j];
            k++; j++;
        }

        for (i = start; i <= end; i++) {
            data[i] = temp[i - start];
        }
    }

    private static long fibonacci(long n) {
        if (n == 0 || n == 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    private static int binarySearch(int[] arr, int left, int right, int x) {
        if (left > right) {
            return -1;
        }

        int mid = (left + right) / 2;

        if (x == arr[mid]) {
            return  mid;
        }
        if (x < arr[mid]) {
            return binarySearch(arr, left, mid - 1, x);
        }
        return binarySearch(arr, mid + 1, right, x);
    }

    private static String findBinary(int decimal, String result) {
        if (decimal == 0) {
            return result;
        }
        result = decimal % 2 + result;
        return findBinary(decimal / 2, result);
    }

    private static String reverseString(String input) {
        if (input.equals("")) {
            return "";
        }
        return reverseString(input.substring(1)) + input.charAt(0);
    }

    private static void recursion(int i) {
        if (i == 10) {
            System.out.println(i);
            return;
        }
        System.out.println(i);
        recursion(i + 1);
    }

    private static boolean isPalindrome(String input) {
        if (input.length() == 0 || input.length() == 1) {
            return true;
        }
        if (input.charAt(0) == input.charAt(input.length() - 1)) {
            return isPalindrome(input.substring(1, input.length() - 1));
        }
        return false;
    }

    private static int recursiveSummation(int input) {
        if (input <= 1) {
            return input;
        }
        return input + recursiveSummation(input - 1);
    }
}
