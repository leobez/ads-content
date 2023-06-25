/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package estacionamento;

/**
 *
 * @author 0040482121003
 */
public class Estacionamento {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Proprio proprio1 = new Proprio("placa1", 2023, "modelo1", 5000, "10/11/23");
        proprio1.imprimeDados();
        proprio1.venderCarro("Vendedor 1", 10000);
        proprio1.imprimeDados();
        proprio1.venderCarro("Vendedor 1", 10000);

        Consignados consig1 = new Consignados("placa2", 2023, "modelo2", 12000, "Proprietario1");
        consig1.imprimeDados();
        consig1.venderCarro("Vendedor 1", 12000);
        consig1.imprimeDados();
        consig1.venderCarro("Vendedor 1", 12000);
        consig1.imprimeDados();
    }
    
}
