using System;
using System.Collections.Generic;

public class Feature1
{
    public string Value { get; set; }
}

public class Waveform1
{
    public List<string> PressForce { get; set; }
}

public class Station1
{
    public string Status { get; set; }
    public Feature1 Feature1 { get; set; }
    public Waveform1 Waveform1 { get; set; }
}

public class Section1
{
    public string Status { get; set; }
    public Station1 Station1 { get; set; }
}

public class RootObject
{
    public string SerialNumber { get; set; }
    public string PartStatus { get; set; }
    public Section1 Section1 { get; set; }
    public DateTime DateTime { get; set; }
}