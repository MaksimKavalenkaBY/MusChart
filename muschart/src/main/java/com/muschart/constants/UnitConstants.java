package com.muschart.constants;

public enum UnitConstants {

    FEAT(" feat. "), AMPERSAND(" & "), COMMA(", ");

    private String unit;

    private UnitConstants(String unit) {
        this.unit = unit;
    }

    @Override
    public String toString() {
        return unit;
    }

}
