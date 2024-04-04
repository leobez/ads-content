/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package autopecas;

/**
 *
 * @author leosb
 */
public class IndexInvalido extends Exception {
    private String msg = "O index digitado e invalido!";

    public IndexInvalido() {
    }
            
    public IndexInvalido(int max_array_size) {
        msg += " O tamanho maximo do arraye e: " + max_array_size + "!";
    }

    @Override
    public String toString() {
        return msg;
    }
 
}
