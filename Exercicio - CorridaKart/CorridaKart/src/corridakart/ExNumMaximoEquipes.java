/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corridakart;

/**
 *
 * @author leosb
 */
public class ExNumMaximoEquipes extends Exception {

    private String msg = "Numero maximo de equipes ja foi alcancado na bateria! ";
    
    public ExNumMaximoEquipes() {
    }
    
    public ExNumMaximoEquipes(int maxCap) {
        msg += "Numero maximo de equipes: " + maxCap + " !";
    }
    
    @Override
    public String toString() {
        return msg;
    }
}
