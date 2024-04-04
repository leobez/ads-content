/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class ListaLotada extends Exception{
    
    private String msg = "Lista lotada \n";
    
    public ListaLotada(){}
    
    public ListaLotada(int capMax) {
        msg += "A capacidade máxima é de: " + capMax + "\n";
    }
    
    @Override
    public String toString() {
        return msg;
    }
    
    
}
