using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace Sorting
{
    public sealed partial class MainPage : Page
    {
        int index = 0;

        public MainPage()
        {
            this.InitializeComponent();
        }

        private void btnCh_1_Click(object sender, RoutedEventArgs e)
        {
            int number;
            int[] arraylist = new int[100];
            Random list = new Random();

            for (int i = 0; i < 100; i++)
            {
                number = list.Next(1, 101);
                arraylist[i] = number;
                txtList.Text += (i+1) + ") " + number + "\n";
            }
            arraylist = bubbleSort(arraylist, 100);
            for (int i = 0; i < 100; i++)
            {
                txtListSorted.Text += (i + 1) + ") " + arraylist[i] + "\n";
            }
        }


        private void btnCh_2_Click(object sender, RoutedEventArgs e)
        {
            int number;
            int[] arraylist = new int[5000];

            index = 0;

            for (int div1 = 100; div1 < 1000; div1++)
            {
                for (int div2 = 100; div2 < 1000; div2++)
                {
                    number = div1 * div2;
                    if (checkPalindrome(number))
                    {
                        arraylist[index] = number;
                        txtCalc.Text += (index + 1) + ") " + number + "\n";
                        index += 1;
                    }
                }
            }
            arraylist = bubbleSort(arraylist, index);
            for (int i = 0; i < index - 1; i++)
            {
                txtListPal.Text += (i + 1) + ") " + arraylist[i] + "\n";
            }
            txtListPal.Text += "Largest: " + arraylist[index-1] + "\n";
        }

        private void btnCh_3_Click(object sender, RoutedEventArgs e)
        {
            string sent1 = txtSentence1.Text.Trim();
            string sent2 = txtSentence2.Text.Trim();

            if (sent1 != string.Empty && sent2 != string.Empty)
            {
                if (checkAnagram(sent1, sent2))
                {
                    lblResult.Text = "Result: TRUE";
                }
                else
                {
                    lblResult.Text = "Result: FALSE";

                }
            }
            else
            {
                lblResult.Text = "Please, input both sentences!";
            }
        }

        private bool checkAnagram(string str1, string str2)
        {
            str1 = str1.Replace(" ", "").ToLower();
            str2 = str2.Replace(" ", "").ToLower();

            if (str1.Length != str2.Length) return false;

            int[] letters = new int[256];
            char[] s_array = str1.ToCharArray();

            foreach (char c in s_array)
            {
                letters[c]++;
            }

            for (int i = 0; i < str2.Length; i++)
            {
                int c = str2[i];
                if (--letters[c] < 0)
                {
                    return false;
                }
            }
            return true;
        }

        private int[] bubbleSort(int[] a, int n)
        {
            int temp;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    if (a[j] > a[j + 1])
                    {
                        temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;
                    }
                }
            }
            return a;
        }

        private bool checkPalindrome(int result)
        {
            int n, digit, rev = 0;

            n = result;

            do
            {
                digit = result % 10;
                rev = (rev * 10) + digit;
                result = result / 10;
            } while (result != 0);

            if (n == rev)
                return true;
            else
                return false;
        }
    }
}
