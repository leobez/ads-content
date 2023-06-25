/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package estacionamento;

import java.util.Objects;

/**
 *
 * @author 0040482121003
 */
public class Consignados extends Carro {

    private String nomeProprietario;
    private double valorDesejado;
    
    public String getNomeProprietario() {
        return nomeProprietario;
    }
    public void setNomeProprietario(String nomeProprietario) {
        this.nomeProprietario = nomeProprietario;
    }
    
    public double getValorDesejado() {
        return valorDesejado;
    }
    public void setValorDesejado(double valorDesejado) {
        this.valorDesejado = valorDesejado;
    }

    // Construtor
    public Consignados(String placa, int anoFabricacao, String modelo, double valorDesejado, String nomeProprietario) {
        super(placa, anoFabricacao, modelo);
        
        this.valorDesejado = valorDesejado;
        this.nomeProprietario = nomeProprietario;
    }
    
    // Métodos
    @Override
    public boolean oferta(double valor) {
        return (valor >= valorDesejado*1.05);
    }
    
    @Override
    public void imprimeDados() {
        super.imprimeDados();
        System.out.println("Nome do proprietario: " + nomeProprietario);
        System.out.println("Valor desejado: " + valorDesejado);
        System.out.println("");
    }

    @Override
    public String toString() {
        return super.toString() + "Consignados{" + "nomeProprietario=" + nomeProprietario + ", valorDesejado=" + valorDesejado + '}';
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.nomeProprietario);
        hash = 97 * hash + (int) (Double.doubleToLongBits(this.valorDesejado) ^ (Double.doubleToLongBits(this.valorDesejado) >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (!super.equals(obj)) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Consignados other = (Consignados) obj;
        if (Double.doubleToLongBits(this.valorDesejado) != Double.doubleToLongBits(other.valorDesejado)) {
            return false;
        }
        return Objects.equals(this.nomeProprietario, other.nomeProprietario);
    }
       
}
