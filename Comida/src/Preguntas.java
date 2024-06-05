import javax.swing.JOptionPane;

public class Preguntas {
    public static void main(String[] args) {
       Object[] options = {"¡Si, me encanta!", "No, puags!", "Mejor una bbq", "Next", "Bye have a good time"};

        int option = JOptionPane.showConfirmDialog(null, "¿Te gusta la pizza con piña?", "Preguntas sobre comida", option);

        if (option == JOptionPane.QUESTION_MESSAGE) {
            System.out.println("Yes, please!");
            JOptionPane.showConfirmDialog(null, "¡Si, me encanta!");
        } else if (option == JOptionPane.QUESTION_MESSAGE) {
            System.out.println("No way!");
            JOptionPane.showConfirmDialog(null, "No, puags!");
        } else if (option == JOptionPane.PLAIN_MESSAGE) {
            System.out.println("No way!");
            JOptionPane.showConfirmDialog(null, "Mejor una bbq");
        } else if (option == JOptionPane.QUESTION_MESSAGE) {
            System.out.println("No way!");
            JOptionPane.showConfirmDialog(null, "Next");
        } else if (option == JOptionPane.PLAIN_MESSAGE) {
            System.out.println("No way!");
            JOptionPane.showConfirmDialog(null, "Bye have a good time");
        }
    }
}
