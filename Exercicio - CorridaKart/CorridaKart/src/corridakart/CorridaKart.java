/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package corridakart;

/**
 *
 * @author leosb
 */
public class CorridaKart {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        
        Bateria bat0 = new Bateria("Categoria Bateria 0", 0);
        
        try {
            bat0.inscreverEquipe(0, "Nome equipe 0", "Nome piloto 0");
            bat0.inscreverEquipe(1, "Nome equipe 1", "Nome piloto 1");
            bat0.inscreverEquipe(2, "Nome equipe 2", "Nome piloto 2");
            bat0.inscreverEquipe(3, "Nome equipe 3", "Nome piloto 3");
            bat0.inscreverEquipe(4, "Nome equipe 4", "Nome piloto 4");
            bat0.inscreverEquipe(5, "Nome equipe 5", "Nome piloto 5");
            bat0.inscreverEquipe(6, "Nome equipe 6", "Nome piloto 6");
            bat0.inscreverEquipe(7, "Nome equipe 7", "Nome piloto 7");
            bat0.inscreverEquipe(8, "Nome equipe 8", "Nome piloto 8");
            bat0.inscreverEquipe(9, "Nome equipe 9", "Nome piloto 9");
            //bat0.inscreverEquipe(10, "Nome equipe 10", "Nome piloto 10");
        } catch (ExNumMaximoEquipes e1) {
            System.out.println(e1);
        } catch (Exception e2) {
            System.out.println(e2);
        }
        //System.out.println(bat0.buscarEquipe(0));

        // CLASSIFICAR  
        try {
            bat0.classificar(0, 5);
            bat0.classificar(1, 10);
            bat0.classificar(2, 7);
            bat0.classificar(3, 2);
            bat0.classificar(4, 3);
            bat0.classificar(5, 4);
            bat0.classificar(6, 1);
            bat0.classificar(7, 6);
            bat0.classificar(8, 9);
            bat0.classificar(9, 8);
        } catch (Exception e) {
            System.out.println(e);
        }
        
        // DESCLASSIFICAR
        try {
            bat0.desclassificar(0);
            bat0.desclassificar(1);
            bat0.desclassificar(2);
        } catch (Exception e) {
            System.out.println(e);
        }
        
        bat0.listarEquipes();
    }
    
}
