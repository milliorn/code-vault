import java.util.Arrays;

class SelectionSort {
    public static void selectionSort(int arr[]) {
        int size = arr.length;

        for (int i = 0; i < size - 1; i++) {
            int currentMinimumIndex = i;

            for (int j = i + 1; j < size; j++) {
                if (arr[j] < arr[currentMinimumIndex]) {
                    currentMinimumIndex = j;
                }
            }
        }
    }

    public static void main(String args[]) {
    }
}
