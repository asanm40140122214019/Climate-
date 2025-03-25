#include <stdio.h>
#include <string.h>

// Function to print a message to the console
void console_log(char *message) {
    printf("%s\n", message);
}

// Function to get user input
void prompt(char *message, char *input) {
    printf("%s", message);
    fgets(input, 100, stdin);
    input[strlen(input) - 1] = '\0'; // Remove the newline character
}

// Function to print a list of items
void print_list(char *list[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%s\n", list[i]);
    }
}

int main() {
    char name[100];
    char hobbies[][100] = {"Reading", "Coding", "Gaming"};
    int num_hobbies = sizeof(hobbies) / sizeof(hobbies[0]);

    console_log("Hello, World!");

    prompt("What is your name? ", name);
    console_log(name);

    console_log("My hobbies:");
    print_list(hobbies, num_hobbies);

    return 0;
}
